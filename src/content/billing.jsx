import Invoice from '../components/invoice.jsx'

const exampleData = {
    customerName: 'Jan Novák',
    issueDate: new Date().toLocaleDateString('cs-CZ'),
    dueDate: '10. 05. 2025',
    paymentMethod: 1,
    transactions: [
        { name: '700 kreditů', quantity: 2, price: 579, total: 1158 },
        { name: '3500 kreditů', quantity: 1, price: 2835, total: 2835 },
        { name: '7000 kreditů', quantity: 0, price: 5670, total: 0 },
    ],
    total: 3993
};


export default function Billing(){
    return <Invoice
        customer={exampleData.customerName}
        issueDate={exampleData.issueDate}
        dueDate={exampleData.dueDate}
        transactions={exampleData.transactions}
        total={exampleData.total}
        paymentMethod={exampleData.paymentMethod}
    />
}