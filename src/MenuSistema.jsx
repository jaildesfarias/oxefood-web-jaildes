import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";


export default function MenuSistema (props) {

    const MenuSistema = () => (
  <div>
    <h3>Menu do Sistema</h3>
  </div>
    );

   return(
       <>
           <Menu inverted>
              
               <Menu.Item
                   content='Home'
                   active={props.tela === 'home'}
                   as={Link}
                   to='/'
               />

               <Menu.Item
                   content='Cliente'
                   active={props.tela === 'cliente'}
                   as={Link}
                   to='/list-cliente'
               />
             <Menu.Item
                   content='Produto'
                   active={props.tela === 'produto'}
                   as={Link}
                   to='/form-produto'
               />

               <Menu.Item
                   content='Entregador'
                   active={props.tela === 'entregador'}
                   as={Link}
                   to='/form-entregador'
               />
            

           </Menu>
       </>
   )
}
