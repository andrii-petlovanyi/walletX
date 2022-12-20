import TransactionsListDesktop from "./TransactionsListDesktop/TransactionsListDesktop";
import TransactionsListMobile from "./TransactionsListMobile/TransactionsListMobile";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
         backgroundColor: 'gray',
      }}
    >
      <TransactionsListDesktop />
      <TransactionsListMobile/>
    </div>
  );
};
