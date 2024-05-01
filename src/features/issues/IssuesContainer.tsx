import { useMemo, useState, useEffect } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { Reorder } from 'framer-motion';
import { useAppSelector } from '../../app/hooks';
import { TO_DO, IN_PROGRESS, DONE } from './constants';
import IssuesColumn from './IssuesColumn';

const variants = {
  notDragging: {
    zIndex: 0,
    boxShadow: 'none',
    background: 'var(--chakra-colors-blackAlpha-100)'
  },
  dragging: {
    zIndex: 1,
    boxShadow: 'var(--chakra-shadows-lg)',
    background: 'var(--chakra-colors-whatsapp-100)'
  }
};

const IssuesContainer = () => {
  const { open, assigned, closed } = useAppSelector(state => state.issues);

  const initialIssues = useMemo(
    () => [
      { title: TO_DO, issues: open },
      { title: IN_PROGRESS, issues: assigned },
      { title: DONE, issues: closed }
    ],
    [open, assigned, closed]
  );

  const [items, setItems] = useState(initialIssues);
  const [draggable, setDraggable] = useState(false);

  useEffect(() => {
    setItems(initialIssues);
  }, [initialIssues]);

  const handleReorder = (newOrder: unknown[]) => {
    setItems(newOrder as typeof items);
  };

  return (
    <SimpleGrid
      as={Reorder.Group}
      axis='x'
      values={items}
      onReorder={handleReorder}
      spacing={4}
      minChildWidth={280}
      style={{ listStyleType: 'none' }}
    >
      {items.map(item => (
        <Box
          as={Reorder.Item}
          key={item.title}
          value={item}
          variants={variants}
          dragTransition={{
            bounceStiffness: 500
          }}
          initial='notDragging'
          whileDrag='dragging'
          dragListener={draggable}
          onMouseEnter={() => setDraggable(true)}
          onMouseLeave={() => setDraggable(false)}
          onDragStart={() => setDraggable(true)}
          onDragEnd={() => setDraggable(false)}
          position='relative'
          bg='blackAlpha.100'
          cursor='move'
        >
          <IssuesColumn title={item.title} issues={item.issues} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default IssuesContainer;
