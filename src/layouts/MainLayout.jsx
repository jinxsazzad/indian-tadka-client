import Chef from "../components/Chef/Chef";
import FoodJournal from "../components/ExtraSection/FoodJournal";
import SpecialDishes from "../components/ExtraSection/SpecialDishes";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const MainLayout = () => {
    return (
        <div className="container mx-auto px-4">
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Chef></Chef>
            <SpecialDishes></SpecialDishes>
            <FoodJournal></FoodJournal>
            <hr /><hr />
            <Footer></Footer> 
        </div>
    );
};

export default MainLayout;