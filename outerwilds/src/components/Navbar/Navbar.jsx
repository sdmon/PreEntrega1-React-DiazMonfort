import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
    return (    
    <AppBar>        
        <Toolbar className='toolbar-navbar' sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography sx={{color:"white", marginRight:'30px'}}>
                Outer Wilds
            </Typography>            
            <Button sx={{color: 'orange'}}>
                Home
            </Button>
            <Button sx={{color: 'orange', marginLeft: '5px'}}>
                Categorias
            </Button>
            <Button sx={{color: 'orange', marginLeft: '5px'}}>
                Productos
            </Button>            
            <CartWidget/><span>1</span>                     
        </Toolbar>

    </AppBar>);   
}

export default Navbar;




