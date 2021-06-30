import styled from 'styled-components';

const SNavbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Mukta', sans-serif;
  font-size: 16px;
  font-weight: 600;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 80px;
    transition: 0.2s linear all;
    &.isTop {
      background-color: transparent;
    }

    .links {
      display: flex;
      align-items: center;
      margin-right: 150px;
    }

    .logo {
      width: 120px;
      margin-left: 150px;
    }

    .ad {
      text-decoration: none;
      color: #404045;
      margin-left: 15px;
      margin-right: 15px;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      padding-bottom: 8px;
      padding-top: 8px;
      &:hover {
        border-bottom: 4px solid #00d071;
      }
      &.isTop {
        background-color: transparent;
        color: white;
      }
    }

    .button-sign {
      color: #00d071;
      border: 1px solid #00d071;
      border-radius: 5px;
      padding: 8px 20px 8px 20px;
      margin-left: 15px;
      &:hover {
        border: 1px solid #00d071;
        background-color: #00d071;
        color: white;
      }
      &.isTop {
        color: white;
        border: 1px solid white;
        &:hover {
          background-color: white;
          color: #404045;
        }
      }
    }
  }
`;

export default SNavbar;
