import logo from '../assets/logos/logo-1.jpeg'
const Spinner = () => /* From Uiverse.io by TamaniPhiri */
    <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-28 h-28 border-8 text-secondary text-4xl animate-spin border-secondary flex items-center justify-center border-t-primary border-b-primary rounded-full">
            <img src={logo} className="w-20 h-20 rounded-full"/>
        </div>
    </div>;

export default Spinner;
