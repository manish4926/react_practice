import Header from 'components/SocialMedia/Components/Header';
import Footer from 'components/SocialMedia/Components/Footer';
import Sidebar from 'components/SocialMedia/Components/Sidebar';
import 'components/SocialMedia/style.css';

const Home = (props) => {
    return (
        <div className='container-fluid object-body'>
            <div className='row'>
            <div className='col-md-2 g-0 sidebar'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10 g-0'>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
            </div>
        </div>
    )
}

export default Home