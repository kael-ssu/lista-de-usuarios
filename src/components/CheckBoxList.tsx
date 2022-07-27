import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxListSecondary(props: any) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.tarefas.map((tarefa: any) => {
        const labelId = `checkbox-list-secondary-label-${tarefa.id}`;
        return (
          <ListItem
            key={tarefa.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(tarefa.id)}
                checked={tarefa.completed}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={tarefa.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
