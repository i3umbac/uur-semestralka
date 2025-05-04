import Invoice from '../components/invoice.jsx'

const exampleData = {
    customerName: 'Jan Novák',
    issueDate: new Date().toLocaleDateString('cs-CZ'),
    dueDate: '10. 05. 2025',
    paymentMethod: 1,
    s: 2,
    m: 4,
    l: 2,
};


export default function Billing(){
    return <Invoice
        customer={exampleData.customerName}
        issueDate={exampleData.issueDate}
        dueDate={exampleData.dueDate}
        paymentMethod={exampleData.paymentMethod}
        s={exampleData.s}
        m={exampleData.m}
        l={exampleData.l}
    />
}