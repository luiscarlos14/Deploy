import SettingsForm from 'components/SettingsForm';
import ProfileCard from 'components/ProfileCard';

export default function Settings() {
    return (
        <>

{/* <TableCard title="Insumos" color={constantes.colors.insumos}>
 */}
           
            <div style={{marginTop: '5%'}} className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                    <div style={{marginTop: "5%"}} className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14">
                            <ProfileCard photo="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"/>
                        </div>
                        <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                            <SettingsForm />
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}
