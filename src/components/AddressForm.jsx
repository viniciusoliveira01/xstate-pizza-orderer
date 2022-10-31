import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Col,
  Container,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "shards-react";
import { Status, Steps } from "./";

export const AddressForm = ({ context, onNext, onPrevious }) => {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <Steps current={3} />
      <Status context={context} keys={["status", "type", "toppings"]} />
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Address</InputGroupText>
        </InputGroupAddon>
        <Controller
          name="address"
          control={control}
          render={({ field }) => <FormInput placeholder="Address" {...field} />}
        />
      </InputGroup>

      <Container>
        <Row>
          <Col sm={{ size: 2 }}>
            <Button onClick={onPrevious}>Toppings!</Button>
          </Col>
          <Col sm={{ size: 2, offset: 8 }}>
            <Button type="submit">Bake it!</Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};
