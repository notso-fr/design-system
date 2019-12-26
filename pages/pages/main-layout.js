import '../../dist/css/index.min.css';
import '../assets/index.scss';
import Menu from '../components/menu';
import Header from '../components/header';
import Footer from '../components/footer';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    return <div className="nsf nsf-theme-red">
      <Header></Header>
      <div className="nsf-6cols">
        <Menu></Menu>
        <div className="nsf-span5">
          {children}
        </div>
      </div>
      <Footer></Footer>
    </div>
  }
}

export default MainLayout
