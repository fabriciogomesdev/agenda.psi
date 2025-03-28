import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pen, Plus, Search, UserX } from 'lucide-react'
import { Input } from "@/components/ui/input";
const invoices = [
  {
    invoice: "INV001",
    name: "João Silva",
    phone: "(11) 99999-9999",
    email: "joao@example.com",
    status: "Ativo",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    name: "Maria Souza",
    phone: "(21) 98888-8888",
    email: "maria@example.com",
    status: "Inativo",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    name: "Carlos Oliveira",
    phone: "(31) 97777-7777",
    email: "carlos@example.com",
    status: "Ativo",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    name: "Ana Santos",
    phone: "(41) 96666-6666",
    email: "ana@example.com",
    status: "Ativo",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
];

export function Patients() {
  return (

    <div className="flex flex-col bg-primary-foreground h-screen">
      <div className="flex p-4 justify-between">
        <div className="flex">
        <h1 className="pr-[30px] pl-[50px] font-semibold text-[30px]">Pacientes</h1>
        <Button className="mt-[5px]">
          <Plus />
          Cadastrar
        </Button>
        </div>
        <div className="flex pr-[33px]">
        <Input className="w-[200px] mt-[5px] mr-[5px] " placeholder="Pesquisar paciente"/>
        <Button type="submit" className="mt-[5px]">
          <Search />
        </Button>
        </div>
      </div>
      <div className="w-full px-4">

        <Table className="w-[95%] mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <TableCaption className="text-lg font-medium mb-2">
            Lista de pacientes
          </TableCaption>
          <TableHeader className="bg-white">
            <TableRow>
              <TableHead className="w-[150px] pl-[50px]">Nome</TableHead>
              <TableHead className="w-[150px] pl-[45px]">Telefone</TableHead>
              <TableHead className="min-w-[200px] pl-[220px]">Email</TableHead>
              <TableHead className="w-[100px] pl-[29px]">Status</TableHead>
              <TableHead className="w-[150px] text-right pr-[17px]">Valor</TableHead>
              <TableHead className="w-[200px] text-right pr-[75px]">Operações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice} className="hover:bg-blue-50">
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell>{invoice.phone}</TableCell>
                <TableCell className="truncate">{invoice.email}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${invoice.status === "Ativo"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                    }`}>
                    {invoice.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <Pen />
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <UserX />
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </div>
    </div>
  );
}








