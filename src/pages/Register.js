import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Button from '@material-tailwind/react/Button';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import style from '../assets/styles/index.css';

export default function Register() {
    return (
        <Page>
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Register
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Nome"
                                iconName="account_circle"
                            />
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Sobrenome"
                                iconName="account_circle"
                            />
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="E-mail"
                                iconName="email"
                            />
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="CPF"
                                iconName="payment"
                            />
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Cidade"
                                iconName="room"
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Register
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
        </Page>
    );
}
