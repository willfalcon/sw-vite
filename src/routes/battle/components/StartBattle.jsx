import { gql, useMutation } from '@apollo/client';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const CREATE_BATTLE_ATTEMPT_MUTATION = gql`
  mutation CreateBattleAttemptMutation($user: ID!, $battle: ID!) {
    createBattleAttemptForBattle(user: $user, battle: $battle) {
      id
    }
  }
`;

const StartBattle = ({ user, battle }) => {
  const [createBattleAttempt, status] = useMutation(CREATE_BATTLE_ATTEMPT_MUTATION, {
    variables: {
      user,
      battle,
    },
  });

  const navigate = useNavigate();

  return (
    <Button
      onClick={async () => {
        const { data } = await createBattleAttempt();

        navigate(`/attempt/${data.createBattleAttemptForBattle.id}`);
      }}
    >
      Battle
    </Button>
  );
};

export default StartBattle;
