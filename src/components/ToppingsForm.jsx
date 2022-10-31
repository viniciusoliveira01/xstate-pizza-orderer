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

export const ToppingsForm = ({ context, onNext, onPrevious }) => {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <Steps current={1} />
      <Status context={context} keys={["status", "type"]} />
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Toppings</InputGroupText>
        </InputGroupAddon>
        <Controller
          name="toppings"
          control={control}
          render={({ field }) => (
            <FormInput placeholder="Add toppings" {...field} />
          )}
        />
      </InputGroup>

      <Container>
        <Row>
          <Col sm={{ size: 2 }}>
            <Button onClick={onPrevious}>Type!</Button>
          </Col>
          <Col sm={{ size: 2, offset: 8 }}>
            <Button type="submit">Address!</Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};
