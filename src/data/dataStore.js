// dane źródłowe, na podstawie których będziemy wyświetlać komponenty na stronie
export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'GTA V',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

export const InfoData = {
  title: 'Information',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  content: 'infoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const FAQData = {
  title: 'Frequently Asked Questions',
  image: 'https://cdn.searchenginejournal.com/wp-content/uploads/2018/09/25-of-the-Best-Examples-of-Effective-FAQ-Pages.png',
  content: 'faqLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

const lists = [
  {
    id: 'list-1',
    title: 'Books, movies and games!',
    description: 'Interesting things I want to check out!',
    image: 'https://wallpaperaccess.com/full/124383.jpg',
  },
  {
    id: 'list-2',
    title: 'Things to do <sup>soon!</sup>',
    description: 'My tasks that I have to remember',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Most important tasks',
    icon: 'plane-departure',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Small tasks - important',
    icon: 'tasks',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Tasks - low priority',
    icon: 'info',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'The Gulag Archipelago',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'ULYSSES',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Pan\'s Labyrinth',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Vertigo(1958)',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Planescape: Torment',
  },
  {
    id: 'card-7',
    columnId: 'column-4',
    title: 'Learning programming',
  },
  {
    id: 'card-8',
    columnId: 'column-5',
    title: 'Barber visit, Monday 17:30',
  },
  {
    id: 'card-9',
    columnId: 'column-6',
    title: 'Take out trash!',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;