import PlayerList from "@/components/PlayerList";

function Team({ team }) {
  return (
    <div>
      {team && (
        <div>
          <h3>Team: {team.teamname}</h3>
          <span>Manager:{team.managers[0].nickname}</span>
          {team.picks.length > 0 && <PlayerList players={team.picks} />}
        </div>
      )}
    </div>
  );
}

export default Team;

// {
//     "id": "1",
//     "teamname": "Jeremy",
//     "img": "https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg",
//     "url": "https://baseball.fantasysports.yahoo.com/b1/2602757/1",
//     "managers": [
//         {
//             "id": "1",
//             "nickname": "Jeremy"
//         }
//     ]
// }
