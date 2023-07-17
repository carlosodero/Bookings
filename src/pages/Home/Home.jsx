import Logo from '../../components/Logo/Logo.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import LayerBlack from '../../components/LayerBlack/LayerBlack.js';
import './Home.css';

function Home() {
  return (
    <>
      <div className='home'>
        <div className='row'>
          <LayerBlack className='col-12 col-md-8 col-lg-3'>
            <Logo><img src='/public/Logo.png' alt='Logo' /></Logo>
            <Input></Input>
            <br></br>
            <Input></Input>
            <Button type='login'>Log In</Button>
            <Button>Register</Button>
          </LayerBlack>
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Home;
