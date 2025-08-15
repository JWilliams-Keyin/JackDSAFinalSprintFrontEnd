import '../App.css';
import CreateTreeTable from '../components/createTreeTable';
import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

function CreateTree() {

    return(
        <>
            <Header/>
            <NavBar/>
            <CreateTreeTable/>
            <Footer/>
        </>
    )
}

export default CreateTree