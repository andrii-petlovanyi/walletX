import React from 'react';
import { TdBorder,StrTr, TdName, TdData, TdDataSum, Table, TdBorderDate, TdBorderBalance } from './TransactionsListMobile.styled';

function getTransList() {
    const transList = [
        {
            id: '1',
            transactionDate: '04.01.19',
            type: '-',
            categoryId: 'Other',
            // userId: 'string', 
            comment: 'Gift for you wife',
            amount: 300.00,
            balanceAfter: 6900.00,
        },
        {
            id: '2',
            transactionDate: '05.01.19',
            type: 'INCOME',
            categoryId: 'Income',
            // userId: 'string', 
            comment: 'January bonus',
            amount: 8000.00,
            balanceAfter: 14900.00,
        },
        {
            id: '3',
            transactionDate: '07.01.19',
            type: '-',
            categoryId: 'Car',
            // userId: 'string', 
            comment: 'Oil',
            amount: 1000.00,
            balanceAfter: 13900.00,
        },
        {
            id: '4',
            transactionDate: '07.01.19',
            type: '-',
            categoryId: 'Products',
            // userId: 'string', 
            comment: 'Vegetables for week',
            amount: 280.00,
            balanceAfter: 13870.00,
        },
        {
            id: '5',
            transactionDate: '07.01.19',
            type: 'INCOME',
            categoryId: 'Income',
            // userId: 'string', 
            comment: 'Gift',
            amount: 1000.00,
            balanceAfter: 14870.00,
        },
    ];

    return transList;
}

const TransactionsListMobile = () => {
    const elementsList = getTransList();

    return (

    elementsList.map(e => {
        return (
        <Table key={e.id}>
            <tbody>
                <StrTr >    
                    <TdBorderDate type={e.type}/>
                    <TdName>Date</TdName>
                    <TdData>{e.transactionDate}</TdData>
                </StrTr>
                <StrTr >
                    <TdBorder type={e.type}/>
                    <TdName>Type</TdName>
                    <TdData>{e.type==='INCOME' ? '+' : '-' }</TdData>
                </StrTr>
                <StrTr >
                    <TdBorder type={e.type}/>
                    <TdName>Category</TdName>
                    <TdData>{e.categoryId}</TdData>
                </StrTr>
                <StrTr >
                    <TdBorder type={e.type}/>
                    <TdName>Comment</TdName>
                    <TdData>{e.comment}</TdData>
                </StrTr>
                <StrTr >
                    <TdBorder type={e.type}/>
                    <TdName>Sum</TdName>
                    <TdDataSum type={e.type}>{e.amount.toFixed(2)}</TdDataSum>
                </StrTr>
                <StrTr >
                    <TdBorderBalance type={e.type} />
                    <TdName>Balance</TdName>
                    <TdData>{e.balanceAfter.toFixed(2)}</TdData>
                </StrTr>
            </tbody>        
        </Table>
        )
        })

    );

}

export default TransactionsListMobile;