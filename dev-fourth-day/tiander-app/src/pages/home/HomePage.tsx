import { Fragment } from "react";
import ZStack from "../../components/primitives/ZStack";
import withSdk from "../../sdk/withSdk";
import ProfileCard from "../../components/profile/ProfileCard";
import {
  Profile,
  ProfilesQueryVariables,
  useProfilesQuery,
} from "@lbucior/tiander-sdk";
import { isNil } from "lodash";
import Container from "react-bootstrap/Container";
import { CardSwiper } from "../../components/card-swiper/CardSwiper";

interface HomePageProps {
  readonly accountId: string;
}

const HomePage = (props: HomePageProps) => {
  const handleSwipe = (direction: string, profile: Profile) => {
    console.log(`SWIPE ${direction} - Profile: ${profile}`);
  };

  const variables: ProfilesQueryVariables = {
    accountId: props.accountId,
    limit: 10,
  };

  const {
    data: profilesQuery,
    loading: loadingProfilesQuery,
    error: errorProfilesQuery,
    refetch: refetchProfilesQuery,
  } = useProfilesQuery({
    variables,
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
  });

  const profiles = profilesQuery && profilesQuery.profiles;

  return (
    <Fragment>
      {/* PAGE HEADER */}

      <Container className="d-flex justify-content-center align-items-center align-content-center">
        <ZStack>
          {!isNil(profiles) &&
          !isNil(profiles.nodes) &&
          profiles.nodes.length > 0 ? (
            profiles.nodes.map((profile) => (
              <div key={`profile-${profile.id}`}>
                <CardSwiper
                  onSwipe={handleSwipe}
                  children={
                    <ProfileCard
                      accountId={props.accountId}
                      profileId={profile.id}
                      profile={profile}
                    />
                  }
                  profile={profile}
                />
              </div>
            ))
          ) : (
            <Fragment />
          )}
        </ZStack>
      </Container>
    </Fragment>
  );
};

export default withSdk()(HomePage);
