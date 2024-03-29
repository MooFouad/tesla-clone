import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector(state => state.car.carItems);
  console.log(cars);

  return (
    <Container>
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
      <Menu>
        {/* map car data */}
        {
          cars && cars.map((car, index) =>
            <div key={index}>{car}</div>
          )
        }
        </Menu>
      <RightMenu>
        <div>Shop</div>
        <div>Tesla Account</div>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {/* map car data */}
        {
          cars && cars.map((car, index) =>
            <li key={index}><span>{car}</span></li>
          )
        }
        <li>
          <p>Existing Inventory</p>
        </li>
        <li>
          <p>Trade-in</p>
        </li>
        <li>
          <p>Cypertruck</p>
        </li>
        <li>
          <p>Roadaster</p>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  z-index: 5;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  a:first-child{
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    a {
      font-weight: 600;
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
