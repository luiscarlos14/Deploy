import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Image from '@material-tailwind/react/Image';
import H5 from '@material-tailwind/react/Heading5';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';

export default function ProfileCard() {
    return (
        <Card>
            <div className="flex flex-wrap justify-center">
                <div className="w-48 px-4 -mt-24">
                    <Image src={ProfilePicture} rounded raised />
                </div>
            </div>

            <div style={{marginTop: 10}} className="text-center">
                <H5 color="gray">John Smith</H5>
                <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="place" size="xl" />
                    Los Angeles, California
                </div>
                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                    <Icon name="work" size="xl" />
                    Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="account_balance" size="xl" />
                    University of Computer Science
                </div>
            </div>
            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    <LeadText color="blueGray">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                    </LeadText>
                </div>
            </CardBody>
            <CardFooter>
                <div className="w-full flex justify-center -mt-8">
                    <a
                        href="#pablo"
                        className="mt-5"
                        onClick={(e) => e.preventDefault()}
                    >
                        <Button color="purple" buttonType="link" ripple="dark">
                            Show more
                        </Button>
                    </a>
                </div>
            </CardFooter>
        </Card>
    );
}
