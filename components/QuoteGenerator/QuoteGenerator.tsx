import Image from "next/image";
import Link from "next/link";
import styled from 'styled-components';

export const GradientBackground = styled.div`
  background: linear-gradient(to right, #031928, #8ca704);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient{
    0%{
      background-position: 0% 50%;
    }
    50%{
      background-position: 100% 50%;
    }
    100%{
      background-position: 0% 50%;
    }
  }

`; 