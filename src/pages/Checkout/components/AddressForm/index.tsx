import { useFormContext } from "react-hook-form";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { ButtonGroup, Card, Container, Header, InputGroup } from "./styles";
import { useEffect, useState } from "react";

function AddressForm() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [paymentSelected, setPaymentSelected] = useState<string>("");

  useEffect(() => {
    setValue("paymentMethod", paymentSelected);
  }, [paymentSelected]);

  function handlePaymentMethod(paymentMethod: string) {
    let buttons: HTMLButtonElement[] = Array.from(
      document.querySelectorAll("button[type='button']")
    );

    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    setPaymentSelected(paymentMethod);
  }

  return (
    <Container>
      <Card>
        <div className="content">
          <Header>
            <MapPinLine color="#C47F17" size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Header>
          <InputGroup>
            <input
              type="text"
              placeholder="CEP"
              className={`input-200 ${errors.cep && "error"}`}
              {...register("cep", {
                onChange: (e) =>
                  (e.target.value = e.target.value.replace(/\D+/g, "")),
              })}
              maxLength={8}
            />
            <input
              type="text"
              placeholder="Rua"
              className={errors.street && "error"}
              {...register("street")}
            />
            <div className="input-group">
              <input
                type="text"
                placeholder="Número"
                className={`input-200 ${errors.number && "error"}`}
                {...register("number")}
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Bairro"
                className={`input-200 ${errors.district && "error"}`}
                {...register("district")}
              />
              <input
                type="text"
                placeholder="Cidade"
                className={errors.city && "error"}
                {...register("city")}
              />
              <input
                type="text"
                placeholder="UF"
                maxLength={2}
                className={`input-60 ${errors.state && "error"}`}
                {...register("state")}
              />
            </div>
          </InputGroup>
        </div>
      </Card>
      <Card>
        <div className="content">
          <Header>
            <CurrencyDollar color="#8047F8" size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Header>
          <ButtonGroup>
            <button
              type="button"
              id="creditCard"
              onClick={() => {
                handlePaymentMethod("Cartão de Crédito");
                document.getElementById("creditCard")?.classList.add("active");
              }}
              {...register("paymentMethod")}
            >
              <CreditCard size={16} color="#8047F8" />
              <span>CARTÃO DE CRÉDITO</span>
            </button>
            <button
              type="button"
              id="debitCard"
              onClick={() => {
                handlePaymentMethod("Cartão de Débito");
                document.getElementById("debitCard")?.classList.add("active");
              }}
              {...register("paymentMethod")}
            >
              <Bank size={16} color="#8047F8" />
              <span>CARTÃO DE DÉBITO</span>
            </button>
            <button
              type="button"
              id="cash"
              onClick={() => {
                handlePaymentMethod("Dinheiro");
                document.getElementById("cash")?.classList.add("active");
              }}
              {...register("paymentMethod")}
            >
              <Money size={16} color="#8047F8" />
              <span>DINHEIRO</span>
            </button>
          </ButtonGroup>
        </div>
      </Card>
    </Container>
  );
}

export default AddressForm;
