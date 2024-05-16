import { Fragment, useCallback } from "react";
import {
  CreateChatInput,
  Profile,
  useCreateChatMutation,
} from "@lbucior/tiander-sdk";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { isNil } from "lodash";

interface ProfileCardProps {
  readonly accountId: string;
  readonly profileId: string;

  profile: Profile;
}

const ProfileCard = (props: ProfileCardProps) => {
  const navigate = useNavigate();

  const [
    createChatMutation,
    { loading: createChatLoading, error: createChatError },
  ] = useCreateChatMutation();

  const handleCreateChat = useCallback(
    async (input: CreateChatInput) =>
      createChatMutation({
        variables: {
          input,
        },
      }),
    [createChatMutation],
  );

  return (
    <Fragment>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 10,
          borderWidth: 1,
          background: "#f2f2f2",
          borderRadius: 10,
          borderColor: "#cccccc",
          borderStyle: "solid",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 550,
            position: "relative",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src={props.profile && props.profile.baseImageUrl}
            style={{
              borderRadius: 10,
              position: "relative",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />

          <div
            style={{
              display: "flex",
              borderRadius: 10,
              padding: 5,
              bottom: 0,
              width: "100%",
              position: "absolute",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderTopWidth: 2,
              borderTopColor: "gray",
              background: "#f2f2f2",
              backdropFilter: "blur(50px)",
              opacity: 0.8,
            }}
          >
            <Row>
              <Col
                style={{
                  display: "flex",
                }}
              >
                {props.profile.interests &&
                  props.profile.interests.map((interest) => (
                    <div
                      key={`interests-${interest}`}
                      className="d-flex flex-row text-black-50 p-2"
                      style={{
                        borderWidth: 1,
                        borderColor: "gray",
                        fontSize: 12,
                      }}
                    >
                      <span>{interest}</span>
                    </div>
                  ))}
              </Col>

              <h3 className="text-black-50">
                {props.profile.officialName},{" "}
                <span>{props.profile.officialBirthday}</span>
              </h3>

              <p className="text-black-50">{props.profile.personalBio}</p>
            </Row>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            width: "100%",
            marginTop: 10,
          }}
        >
          <Button
            type="submit"
            size="lg"
            variant="primary"
            onClick={() => {
              handleCreateChat({
                accountId: props.accountId,
                profileId: props.profileId,
              })
                .then((res) => {
                  if (!isNil(res.data?.createChat)) {
                    navigate(`/chat/${res.data?.createChat.id}`, {
                      state: {
                        profile: props.profile,
                      },
                    });
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Conversar
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default ProfileCard;
