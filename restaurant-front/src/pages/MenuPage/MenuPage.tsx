import { useState } from "react";
import {
  Book,
  BookPage,
  Container,
  ControlButton,
  Controls,
  Dot,
  Dots,
  Eyebrow,
  Hero,
  HeroContent,
  HeroText,
  Hint,
  ItemDescription,
  ItemName,
  ItemPrice,
  MenuGrid,
  MenuItem,
  MenuShell,
  Page,
  PageHeader,
  PageNote,
  PageNumber,
  PageTitle,
  Spread,
  Title,
  TurningPage,
} from "./MenuPage.styles";

type Dish = {
  name: string;
  description: string;
  price: string;
};

type MenuSection = {
  title: string;
  note: string;
  items: Dish[];
};

const menuSections: MenuSection[] = [
  {
    title: "Starters & Boards",
    note: "Small plates inspired by Serbian table traditions.",
    items: [
      {
        name: "Serbian Tasting Board",
        description: "Smoked beef, kulen, young cheese, kajmak, ajvar and warm flatbread.",
        price: "1,690 RSD",
      },
      {
        name: "Grilled Halloumi & Ajvar",
        description: "Charred halloumi, roasted pepper ajvar and herbs.",
        price: "890 RSD",
      },
      {
        name: "Veal Soup",
        description: "Slow cooked veal broth with root vegetables and parsley.",
        price: "520 RSD",
      },
      {
        name: "Crispy Cheese Bites",
        description: "Breaded local cheese with tartar dip and lemon.",
        price: "760 RSD",
      },
    ],
  },
  {
    title: "From the Grill",
    note: "Our charcoal favorites, served with onions and house bread.",
    items: [
      {
        name: "Cevapi 10 pcs",
        description: "Beef cevapi, chopped onion, kajmak and lepinja.",
        price: "980 RSD",
      },
      {
        name: "Leskovac Pljeskavica",
        description: "Spiced grilled patty with urnebes salad and fries.",
        price: "1,150 RSD",
      },
      {
        name: "Gurmanska Pljeskavica",
        description: "Stuffed patty with cheese, bacon, chilli and roasted peppers.",
        price: "1,360 RSD",
      },
      {
        name: "Mixed Grill for Two",
        description: "Cevapi, sausage, chicken, pork neck, fries, kajmak and ajvar.",
        price: "2,980 RSD",
      },
    ],
  },
  {
    title: "House Mains",
    note: "Comfort dishes with a Nicola's Restaurant touch.",
    items: [
      {
        name: "Karadjordjeva Steak",
        description: "Rolled pork steak filled with kajmak, served with tartar and potatoes.",
        price: "1,620 RSD",
      },
      {
        name: "Muckalica",
        description: "Slow simmered pork, peppers and tomatoes with warm lepinja.",
        price: "1,280 RSD",
      },
      {
        name: "Chicken in Kajmak Sauce",
        description: "Grilled chicken breast, creamy kajmak sauce and mashed potatoes.",
        price: "1,340 RSD",
      },
      {
        name: "Smoked Trout",
        description: "Trout fillet with garlic potatoes, spinach and lemon oil.",
        price: "1,790 RSD",
      },
    ],
  },
  {
    title: "Salads & Sides",
    note: "Fresh, sharp and made for sharing.",
    items: [
      {
        name: "Shopska Salad",
        description: "Tomato, cucumber, onion, pepper and grated white cheese.",
        price: "520 RSD",
      },
      {
        name: "Roasted Pepper Salad",
        description: "Marinated red peppers, garlic, parsley and olive oil.",
        price: "560 RSD",
      },
      {
        name: "Vitamin Salad",
        description: "Cabbage, carrot, beetroot, apple and citrus dressing.",
        price: "490 RSD",
      },
      {
        name: "Rustic Potatoes",
        description: "Crispy potatoes with smoked paprika and sea salt.",
        price: "460 RSD",
      },
    ],
  },
  {
    title: "Desserts",
    note: "Sweet endings with classic Balkan flavors.",
    items: [
      {
        name: "Vanilla Krempita",
        description: "Flaky pastry with light vanilla cream and powdered sugar.",
        price: "560 RSD",
      },
      {
        name: "Walnut Baklava",
        description: "Layered pastry, walnuts, honey syrup and lemon zest.",
        price: "520 RSD",
      },
      {
        name: "Chocolate Pancakes",
        description: "Warm crepes with chocolate, biscuit crumbs and whipped cream.",
        price: "620 RSD",
      },
      {
        name: "Plum Dumplings",
        description: "Potato dumplings with plum, cinnamon and toasted breadcrumbs.",
        price: "590 RSD",
      },
    ],
  },
  {
    title: "Drinks",
    note: "Fresh juices, coffee and local favorites.",
    items: [
      {
        name: "Homemade Lemonade",
        description: "Fresh lemon, mint and a touch of honey.",
        price: "360 RSD",
      },
      {
        name: "Fresh Orange Juice",
        description: "Pressed to order.",
        price: "440 RSD",
      },
      {
        name: "Serbian Coffee",
        description: "Traditional strong coffee served in a small cup.",
        price: "260 RSD",
      },
      {
        name: "House Rakija",
        description: "Plum, quince or apricot.",
        price: "390 RSD",
      },
    ],
  },
];

const MenuPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [turnDirection, setTurnDirection] = useState<"next" | "previous">("next");
  const [turnKey, setTurnKey] = useState(0);
  const leftPage = menuSections[pageIndex];
  const rightPage = menuSections[pageIndex + 1];
  const totalSpreads = Math.ceil(menuSections.length / 2);
  const currentSpread = Math.floor(pageIndex / 2) + 1;

  const goToPreviousPage = () => {
    setTurnDirection("previous");
    setTurnKey((current) => current + 1);
    setPageIndex((current) => Math.max(current - 2, 0));
  };

  const goToNextPage = () => {
    setTurnDirection("next");
    setTurnKey((current) => current + 1);
    setPageIndex((current) => Math.min(current + 2, menuSections.length - 1));
  };

  const handleTouchEnd = (touchEnd: number) => {
    if (touchStart === null) {
      return;
    }

    const distance = touchStart - touchEnd;

    if (distance > 50) {
      goToNextPage();
    }

    if (distance < -50) {
      goToPreviousPage();
    }

    setTouchStart(null);
  };

  return (
    <Page>
      <Container>
        <Hero>
          <HeroContent>
            <Eyebrow>Nicola's Restaurant menu</Eyebrow>
            <Title>Serbian soul, modern table</Title>
            <HeroText>
              Browse our menu like a small restaurant book. Swipe on mobile or
              use the controls to move between pages.
            </HeroText>
          </HeroContent>
        </Hero>

        <MenuShell>
          <Book
            onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
            onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
          >
            <Spread key={pageIndex}>
              <BookPage $side="left">
                <PageHeader>
                  <div>
                    <PageTitle>{leftPage.title}</PageTitle>
                    <PageNote>{leftPage.note}</PageNote>
                  </div>
                  <PageNumber>Page {pageIndex + 1}</PageNumber>
                </PageHeader>

                <MenuGrid>
                  {leftPage.items.map((item) => (
                    <MenuItem key={item.name}>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>{item.price}</ItemPrice>
                      <ItemDescription>{item.description}</ItemDescription>
                    </MenuItem>
                  ))}
                </MenuGrid>
              </BookPage>

              {rightPage && (
                <BookPage $side="right">
                  <PageHeader>
                    <div>
                      <PageTitle>{rightPage.title}</PageTitle>
                      <PageNote>{rightPage.note}</PageNote>
                    </div>
                    <PageNumber>Page {pageIndex + 2}</PageNumber>
                  </PageHeader>

                  <MenuGrid>
                    {rightPage.items.map((item) => (
                      <MenuItem key={item.name}>
                        <ItemName>{item.name}</ItemName>
                        <ItemPrice>{item.price}</ItemPrice>
                        <ItemDescription>{item.description}</ItemDescription>
                      </MenuItem>
                    ))}
                  </MenuGrid>
                </BookPage>
              )}
            </Spread>

            {turnKey > 0 && (
              <TurningPage key={`turn-${turnKey}`} $turnDirection={turnDirection} />
            )}

            <Controls>
              <ControlButton disabled={pageIndex === 0} onClick={goToPreviousPage}>
                Previous
              </ControlButton>
              <Dots>
                {menuSections.map((section, index) => (
                  <Dot
                    key={section.title}
                    $active={index === pageIndex || index === pageIndex + 1}
                    aria-label={`Open ${section.title}`}
                    onClick={() => {
                      setTurnDirection(index > pageIndex ? "next" : "previous");
                      setTurnKey((current) => current + 1);
                      setPageIndex(index % 2 === 0 ? index : index - 1);
                    }}
                  />
                ))}
              </Dots>
              <ControlButton
                disabled={pageIndex >= menuSections.length - 2}
                onClick={goToNextPage}
              >
                Next
              </ControlButton>
            </Controls>
            <Hint>
              Spread {currentSpread} / {totalSpreads}. Swipe left or right on mobile
              to turn the menu pages.
            </Hint>
          </Book>
        </MenuShell>
      </Container>
    </Page>
  );
};

export default MenuPage
