export interface IUser {
  firstName: string;
  id: number;
  profileImage: any;
}

export interface IUserStory extends IUser {}

export interface IUserPost extends IUser {
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
  image: any;
}

export const userStories: IUserStory[] = [
  {
    firstName: 'Joseph',
    id: 1,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Josh',
    id: 2,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Jenna',
    id: 3,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Neo',
    id: 4,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Casey',
    id: 5,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Clancy',
    id: 6,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Blurryface',
    id: 7,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Niners',
    id: 8,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Bishops',
    id: 9,
    profileImage: require('./assets/images/default_profile.png'),
  },
];

export const userPosts: IUserPost[] = [
  {
    firstName: 'Joseph',
    lastName: 'Tyler',
    location: 'Ohio',
    likes: 100,
    comments: 80,
    bookmarks: 30,
    id: 1,
    profileImage: require('./assets/images/default_profile.png'),
    image: require('./assets/images/default_post.png'),
  },
  {
    firstName: 'Josh',
    lastName: 'Dun',
    location: 'Ohio',
    likes: 21,
    comments: 21,
    bookmarks: 21,
    id: 2,
    profileImage: require('./assets/images/default_profile.png'),
    image: require('./assets/images/default_post.png'),
  },
  {
    firstName: 'Jenna',
    lastName: 'Tyler',
    location: 'Ohio',
    likes: 400,
    comments: 300,
    bookmarks: 80,
    id: 3,
    profileImage: require('./assets/images/default_profile.png'),
    image: require('./assets/images/default_post.png'),
  },
  {
    firstName: 'Nico',
    lastName: '',
    location: 'Trench',
    likes: 4000,
    comments: 2500,
    bookmarks: 3500,
    id: 4,
    profileImage: require('./assets/images/default_profile.png'),
    image: require('./assets/images/default_post.png'),
  },
  {
    firstName: 'Clancy',
    lastName: '',
    location: 'Dema',
    likes: 1200,
    comments: 300,
    bookmarks: 80,
    id: 5,
    profileImage: require('./assets/images/default_profile.png'),
    image: require('./assets/images/default_post.png'),
  },
  {
    firstName: 'Niners',
    lastName: '',
    location: 'Trench',
    likes: 2000,
    comments: 800,
    bookmarks: 80,
    id: 6,
    profileImage: require('./assets/images/default_profile.png'),
    image: require('./assets/images/default_post.png'),
  },
  {
    firstName: 'Bishops',
    lastName: '',
    location: 'Dema',
    likes: 9,
    comments: 0,
    bookmarks: 0,
    id: 7,
    profileImage: require('./assets/images/default_profile.png'),
    image: require('./assets/images/default_post.png'),
  },
];
