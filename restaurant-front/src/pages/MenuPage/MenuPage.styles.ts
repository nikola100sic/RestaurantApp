import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  background:
    linear-gradient(rgba(250, 235, 215, 0.9), rgba(250, 235, 215, 0.96)),
    url("/image4.jpg");
  background-size: cover;
  background-attachment: fixed;
`;

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 34px 16px 78px;
`;

export const Hero = styled.section`
  min-height: 300px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background:
    linear-gradient(90deg, rgba(31, 20, 5, 0.88), rgba(31, 20, 5, 0.35)),
    url("/cevapi.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 42px rgba(60, 40, 8, 0.22);
`;

export const HeroContent = styled.div`
  max-width: 680px;
  padding: 34px;
  color: white;

  @media (max-width: 640px) {
    padding: 26px 20px;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 8px;
  color: #fbe692;
  font-weight: 800;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 46px;
  line-height: 1.08;

  @media (max-width: 640px) {
    font-size: 34px;
  }
`;

export const HeroText = styled.p`
  margin: 14px 0 0;
  font-size: 18px;
  line-height: 1.55;
  color: #f8ecd9;
`;

export const MenuShell = styled.section`
  margin-top: 30px;
`;

export const Book = styled.div`
  position: relative;
  perspective: 1400px;
  border-radius: 14px;
  padding: 22px;
  background:
    linear-gradient(90deg, rgba(77, 45, 11, 0.24), transparent 18%, transparent 82%, rgba(77, 45, 11, 0.2)),
    #f8eedc;
  box-shadow:
    0 24px 48px rgba(60, 40, 8, 0.24),
    inset 0 0 0 1px rgba(78, 48, 15, 0.12);

  @media (max-width: 720px) {
    padding: 14px;
  }
`;

export const Spread = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  transform-style: preserve-3d;

  &::before {
    content: "";
    position: absolute;
    top: 18px;
    bottom: 18px;
    left: 50%;
    width: 26px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      rgba(60, 40, 8, 0.18),
      rgba(255, 255, 255, 0.45),
      rgba(60, 40, 8, 0.16)
    );
    z-index: 3;
    pointer-events: none;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

export const BookPage = styled.div<{ $side: "left" | "right" }>`
  min-height: 520px;
  border-radius: ${({ $side }) => ($side === "left" ? "10px 0 0 10px" : "0 10px 10px 0")};
  padding: 28px;
  background:
    ${({ $side }) =>
      $side === "left"
        ? "linear-gradient(90deg, rgba(72, 41, 9, 0.08), transparent 16%, transparent 88%, rgba(72, 41, 9, 0.14)),"
        : "linear-gradient(90deg, rgba(72, 41, 9, 0.14), transparent 12%, transparent 84%, rgba(72, 41, 9, 0.08)),"}
    #fff8ec;
  border: 1px solid rgba(78, 48, 15, 0.12);
  box-shadow: ${({ $side }) =>
    $side === "left"
      ? "inset -16px 0 28px rgba(60, 40, 8, 0.08)"
      : "inset 16px 0 28px rgba(60, 40, 8, 0.08)"};

  @media (max-width: 720px) {
    min-height: auto;
    border-radius: 10px;
    padding: 20px 16px;
  }
`;

export const TurningPage = styled.div<{ $turnDirection: "next" | "previous" }>`
  pointer-events: none;
  position: absolute;
  top: 22px;
  bottom: 80px;
  left: ${({ $turnDirection }) => ($turnDirection === "next" ? "50%" : "22px")};
  right: ${({ $turnDirection }) => ($turnDirection === "next" ? "22px" : "50%")};
  border-radius: 10px;
  z-index: 5;
  transform-origin: ${({ $turnDirection }) =>
    $turnDirection === "next" ? "left center" : "right center"};
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.78), rgba(255, 248, 236, 0.96) 38%, rgba(121, 74, 20, 0.18)),
    #fff8ec;
  box-shadow: 0 18px 28px rgba(60, 40, 8, 0.22);
  animation: ${({ $turnDirection }) =>
      $turnDirection === "next" ? "flipForward" : "flipBackward"}
    0.72s ease both;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    ${({ $turnDirection }) => ($turnDirection === "next" ? "right: 0;" : "left: 0;")}
    width: 42%;
    height: 100%;
    border-radius: 10px;
    background: ${({ $turnDirection }) =>
      $turnDirection === "next"
        ? "linear-gradient(135deg, transparent 25%, rgba(60, 40, 8, 0.22))"
        : "linear-gradient(225deg, transparent 25%, rgba(60, 40, 8, 0.22))"};
  }

  @keyframes flipForward {
    0% {
      opacity: 0;
      transform: rotateY(0deg) skewY(0deg);
    }

    18% {
      opacity: 1;
    }

    72% {
      opacity: 1;
      transform: rotateY(-142deg) skewY(-7deg);
    }

    100% {
      opacity: 0;
      transform: rotateY(-178deg) skewY(-8deg);
    }
  }

  @keyframes flipBackward {
    0% {
      opacity: 0;
      transform: rotateY(0deg) skewY(0deg);
    }

    18% {
      opacity: 1;
    }

    72% {
      opacity: 1;
      transform: rotateY(142deg) skewY(7deg);
    }

    100% {
      opacity: 0;
      transform: rotateY(178deg) skewY(8deg);
    }
  }

  @media (max-width: 720px) {
    top: 14px;
    bottom: 92px;
    left: 14px;
    right: 14px;
    animation-duration: 0.48s;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  border-bottom: 1px solid rgba(60, 40, 8, 0.18);
  padding-bottom: 16px;
  margin-bottom: 18px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const PageTitle = styled.h2`
  margin: 0;
  color: #3c2808;
  font-size: 30px;
`;

export const PageNote = styled.p`
  margin: 8px 0 0;
  color: #70522b;
  line-height: 1.5;
`;

export const PageNumber = styled.div`
  color: #8a6635;
  font-weight: 800;
  white-space: nowrap;
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
`;

export const MenuItem = styled.article`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 14px;
  padding-bottom: 14px;
  border-bottom: 1px dashed rgba(60, 40, 8, 0.2);
`;

export const ItemName = styled.h3`
  margin: 0;
  color: #3c2808;
  font-size: 18px;
`;

export const ItemPrice = styled.div`
  color: #7b4e15;
  font-weight: 800;
`;

export const ItemDescription = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  color: #6a5130;
  line-height: 1.45;
  font-size: 14px;
`;

export const Controls = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ControlButton = styled.button`
  border: 0;
  border-radius: 999px;
  background: #3c2808;
  color: white;
  padding: 10px 16px;
  font-weight: 800;
  cursor: pointer;
  min-width: 118px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "28px" : "10px")};
  height: 10px;
  border: 0;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#3c2808" : "rgba(60, 40, 8, 0.28)")};
  cursor: pointer;
  transition: width 0.2s ease, background 0.2s ease;
`;

export const Hint = styled.p`
  margin: 12px 0 0;
  color: #76562b;
  font-size: 13px;
  text-align: center;
`;
