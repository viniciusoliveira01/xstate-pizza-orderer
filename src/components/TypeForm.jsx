import { useForm, Controller } from "react-hook-form";
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

export const TypeForm = ({ context, onNext }) => {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <Steps current={1} />
      <Status context={context} keys={["status"]} />
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Type</InputGroupText>
        </InputGroupAddon>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <FormInput placeholder="Pizza type" {...field} />
          )}
        />
      </InputGroup>

      <Container>
        <Row>
          <Col sm={{ size: 2, offset: 10 }}>
            <Button type="submit">Toppings!</Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};
