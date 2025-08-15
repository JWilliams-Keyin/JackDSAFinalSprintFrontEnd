import '../App.css';
import PreviousTreesTable from '../components/previousTreesTable';
import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

function PreviousTrees() {

    return(
        <>
            <Header/>
            <NavBar/>
            <PreviousTreesTable/>
            <Footer/>
        </>
    )
}

export default PreviousTrees