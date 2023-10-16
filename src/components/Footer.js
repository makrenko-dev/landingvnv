import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';

function ContainerOutsideExample() {
  return (
    <div style={{maxWidth: '100%'}} >
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <DesktopBreakpoint>
        <Container style={{display:'flex', justifyContent:'center'}}>
          <Navbar.Brand style={{fontSize:'10px'}}href="#">LUIBOMYR LUZNYI</Navbar.Brand>
        </Container>
        </DesktopBreakpoint>
         <PhoneBreakpoint>
        <Container style={{display:'flex', justifyContent:'center'}}>
          <Navbar.Brand style={{fontSize:'10px'}}href="#">LUIBOMYR LUZNYI</Navbar.Brand>
        </Container>
        </PhoneBreakpoint>
      </Navbar>
    </div>
  );
}

export default ContainerOutsideExample;