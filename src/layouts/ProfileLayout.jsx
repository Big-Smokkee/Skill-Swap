import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MyProfilePage from "../pages/MyProfilePage";


const ProfileLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <MyProfilePage></MyProfilePage>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ProfileLayout;