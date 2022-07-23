import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { items } from './data/items';
import { Category } from './types/Category';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea'

const App = () => {

  const [list,setList] = useState(items); // lista de itens.
  const [filteredList, setFilteredList] = useState<Item[]>([]); // lista com items de mes especifico
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); // mês atual

  useEffect(() => { 
    setFilteredList( filterListByMonth(list, currentMonth));
  }, [list,currentMonth]);

  const handleMonthChange = (newMonth:string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
      {/* Área de informações */}
      <InfoArea 
      currentMonth={currentMonth}
      onMonthChange={handleMonthChange}
      />

      {/* Área de Inserção */}

      {/* Tabela de itens */}
      <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  );
}


export default App;