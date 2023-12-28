import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CartContext } from "../../contexts/CartContext";

import { FormContainer } from "./styles";
import AddressForm from "./components/AddressForm";
import ProductForm from "./components/ProductForm";

const cartFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Informe seu CEP"),
  street: zod.string().min(5, "Informe sua rua"),
  number: zod.string().min(2, "Informe o número do seu endereço"),
  complement: zod.string().optional(),
  district: zod.string().min(2, "Informe seu bairro"),
  city: zod.string().min(3, "Informe sua cidade"),
  state: zod.string().min(2, "Informe sua UF"),
  paymentMethod: zod
    .string()
    .nonempty({ message: "Informe o método de pagamento" }),
});

type CartFormData = zod.infer<typeof cartFormValidationSchema>;

function Checkout() {
  const { cart, createDelivery } = useContext(CartContext);
  const navigate = useNavigate();

  const cartForm = useForm<CartFormData>({
    resolver: zodResolver(cartFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      state: "",
      paymentMethod: "",
    },
  });

  const { handleSubmit, reset } = cartForm;

  function handleCreateDelivery(data: CartFormData) {
    createDelivery(data);
    reset();
    navigate("/success");
  }

  useEffect(() => {
    if (cart.items.length == 0) {
      navigate("/");
    }
    if (cart.orderConfirmed) {
      navigate("/success");
    }
  }, [cart]);

  return cart.items.length > 0 ? (
    <FormContainer
      onSubmit={handleSubmit((data) => handleCreateDelivery(data))}
    >
      <FormProvider {...cartForm}>
        <AddressForm />
        <ProductForm />
      </FormProvider>
    </FormContainer>
  ) : (
    <></>
  );
}

export default Checkout;
