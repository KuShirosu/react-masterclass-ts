import { useQuery } from "react-query";

interface PriceProps {
  coinId: string;
}

interface IPrice {
  quotes: {
    USD: {
      price: number;
    };
  };
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPrice>(["price", coinId]);

  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <h1>current price: ${data?.quotes.USD.price}</h1>
      )}
    </div>
  );
}

export default Price;
