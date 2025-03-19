import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";






export interface Paciente {
    id: number;
    nome: string;
    idade: number;
    ativo: boolean;
    valor: number;
    modalidade: 'presencial' | 'online';
}

export function Patients(){

    
    return(
        <>
        <div className="flex flex-col gap-4">
          <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight">Pacientes</h1>
        </div>
        <div className="space-y-2.5 w-full flex flex-col items-center">
          <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="Nome do paciente" className="h-8 w-[320px]" />
          </form>
          <div className="rounded-md border w-full flex justify-left">
            <Table className="bg-calendar border-4px table-fixed w-1/2">
              <TableHeader>
                <TableRow className="flex justify-between">
                  <TableHead></TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Idade</TableHead>
                  <TableHead>Tipo atendimento</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="flex justify-between">
                  <TableCell>Fabricio</TableCell>
                  <TableCell>22</TableCell>
                  <TableCell>presencial</TableCell>
                </TableRow>
                <TableRow className="flex justify-between">
                  <TableCell>Perry o ornitorrinco</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>virtual</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </>
    )
}