import { Card, CardBody, CardHeader } from "reactstrap";

export default function Success() {
  return (
    <Card>
      <CardHeader>Başarılı!</CardHeader>
      <CardBody>
        <p>Form başarıyla gönderildi. Hoş geldiniz!</p>
      </CardBody>
    </Card>
  );
}