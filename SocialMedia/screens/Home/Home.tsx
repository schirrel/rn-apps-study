import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {IUserPost, userPosts} from '../../data';
import Header from '../../components/Header/Header';
import UserStories from '../../components/UserStories/UserStories';
import UserPost from '../../components/UserPost/UserPost';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../Style';

function Home({navigation}: any): React.JSX.Element {
  const userPostsPageSize = 2;
  const [pageLoadCounter, setPageLoadCounter] = useState(1);
  const [userPostsRendered, setUserPostsRendered] = useState<IUserPost[]>([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  useEffect(() => {
    setIsLoadingUserPosts(true);
    const dataToRender = loadPosts(userPosts, 1, userPostsPageSize);
    setUserPostsRendered(dataToRender);
    setIsLoadingUserPosts(false);
  }, []);

  const loadPosts = (
    storiesData: IUserPost[],
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
    if (isLoadingUserPosts) {
      return;
    }

    setIsLoadingUserPosts(true);
    const dataToRender = loadPosts(
      userPosts,
      pageLoadCounter + 1,
      userPostsPageSize,
    );
    if (dataToRender.length > 0) {
      setUserPostsRendered(prev => [...prev, ...dataToRender]);
    }
    setIsLoadingUserPosts(false);
    setPageLoadCounter(pageLoadCounter + 1);
  };

  return (
    <SafeAreaView style={globalStyles.lightBackground}>
      <FlatList
        data={userPostsRendered}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Header navigation={navigation} />
            <UserStories />
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          loadMore();
        }}
        renderItem={({item}) => (
          <UserPost
            profileImage={item.profileImage}
            key={item.id}
            firstName={item.firstName}
            id={item.id}
            lastName={item.lastName}
            comments={item.comments}
            bookmarks={item.bookmarks}
            likes={item.likes}
            location={item.location}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Home;
