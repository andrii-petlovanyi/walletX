import TransactionsListDesktop from "components/TransactionsListDesktop/TransactionsListDesktop";
import TransactionsListMobile from "components/TransactionsListMobile/TransactionsListMobile";

import { ListBox } from "./HomePage.styled";


const HomePage = () => {

  const viewPortWith = window.innerWidth;

  return (
      <ListBox>
          { viewPortWith<767.98 ? <TransactionsListMobile/> :  <TransactionsListDesktop/>}
    </ListBox>
  );
}

export default HomePage;