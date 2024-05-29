import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import style from './Style';
import {IUserStory, userStories} from '../../data';
import UserStory from '../UserStory/UserStory';

function UserStories(): React.JSX.Element {
  const userStoriesPageSize = 4;
  const [pageLoadCounter, setPageLoadCounter] = useState(1);
  const [userStoriesRendered, setUserStoriesRendered] = useState<IUserStory[]>(
    [],
  );
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  useEffect(() => {
    setIsLoadingUserStories(true);
    const dataToRender = loadStories(userStories, 1, userStoriesPageSize);
    setUserStoriesRendered(dataToRender);
    setIsLoadingUserStories(false);
  }, []);

  const loadStories = (
    storiesData: IUserStory[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= storiesData.length) {
      return [];
    }

    return storiesData.slice(startIndex, endIndex);
  };
  const loadMore = () => {
    if (isLoadingUserStories) {
      return;
    }

    setIsLoadingUserStories(true);
    const dataToRender = loadStories(
      userStories,
      pageLoadCounter + 1,
      userStoriesPageSize,
    );
    if (dataToRender.length > 0) {
      setUserStoriesRendered(prev => [...prev, ...dataToRender]);
    }
    setIsLoadingUserStories(false);
    setPageLoadCounter(pageLoadCounter + 1);
  };

  return (
    <View style={style.storyContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          loadMore();
        }}
        horizontal={true}
        data={userStoriesRendered}
        renderItem={({item}) => (
          <UserStory
            firstName={item.firstName}
            id={item.id}
            profileImage={item.profileImage}
          />
        )}
      />
    </View>
  );
}

export default UserStories;
