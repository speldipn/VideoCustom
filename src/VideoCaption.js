import React from "react";

const sample = [
  {
    start_time: "00:00:01,886",
    end_time: "00:00:02,918",
    text: "안녕하세요. "
  },
  {
    start_time: "00:00:02,935",
    end_time: "00:00:07,693",
    text: "위즈랩 시작하기 첫 번째 수업인 스프라이트 움직이기 수업이에요. "
  },
  {
    start_time: "00:00:07,721",
    end_time: "00:00:14,771",
    text:
      "이번에는 오카가 보물 상자를 얻을 수 있도록 움직임 명령을 이용해서 오카를 움직여볼 거예요."
  },
  {
    start_time: "00:00:14,891",
    end_time: "00:00:17,891",
    text: "아래에 보면 여러 가지 스프라이트가 있을 거예요. "
  },
  {
    start_time: "00:00:18,530",
    end_time: "00:00:23,900",
    text: "오카를 움직이게 해야 하니까 오카 스프라이트에 명령을 해야겠죠? "
  },
  {
    start_time: "00:00:23,917",
    end_time: "00:00:32,330",
    text:
      "맨 오른쪽에 있는 오카 스프라이트를 찾아서 클릭을 해보고 여기에 명령어를 적어서 코딩을 할 거예요."
  },
  {
    start_time: "00:00:32,463",
    end_time: "00:00:36,823",
    text: "움직임에 대한 명령어는 움직임 탭에 모여있어요. "
  },
  {
    start_time: "00:00:36,863",
    end_time: "00:00:41,637",
    text: "여기 맨 위에 있는 moveForward 명령어를 한번 이용해볼거예요."
  },
  {
    start_time: "00:00:41,675",
    end_time: "00:00:47,096",
    text: "여기다가 마우스를 클릭하고 한번  moveForward를 입력해볼까요? "
  },
  {
    start_time: "00:00:47,101",
    end_time: "00:00:52,780",
    text: "이렇게 move까지만 쳤는데도 아래에 자동으로 쭉 뜨죠?"
  },
  {
    start_time: "00:00:52,977",
    end_time: "00:00:57,735",
    text: "키보드 방향 키로 눌러서 엔터를 치거나 마우스로 클릭하면 "
  },
  {
    start_time: "00:00:57,761",
    end_time: "00:01:00,761",
    text: "자동으로 명령어가 입력이 될 거예요. "
  },
  {
    start_time: "00:01:00,761",
    end_time: "00:01:02,909",
    text: "한번 실행을 눌러볼까요? "
  },
  {
    start_time: "00:01:03,883",
    end_time: "00:01:09,366",
    text: "오카가 앞으로 조금 나가죠? 우리는 조금만 더 멀리 나가게 하고 싶어요."
  },
  {
    start_time: "00:01:09,413",
    end_time: "00:01:11,668",
    text: "그러면 어떻게 할까요?"
  },
  {
    start_time: "00:01:12,086",
    end_time: "00:01:19,020",
    text: "여기 숫자를 조금 더 큰 숫자로 바꿔볼게요. 200으로 한번 해볼까요? "
  },
  {
    start_time: "00:01:19,686",
    end_time: "00:01:26,093",
    text:
      "그리고 실행 버튼을 다시 눌러보면 아까보다 조금 더 멀리 간 걸 확인할 수 있어요."
  },
  {
    start_time: "00:01:26,909",
    end_time: "00:01:30,954",
    text: "우리가 오카를 두 번 움직이게 하려면 어떻게 해야 할까요?"
  },
  {
    start_time: "00:01:31,666",
    end_time: "00:01:36,602",
    text: "컴퓨터는 하나하나씩 순서대로 명령을 실행한다고 배웠죠?"
  },
  {
    start_time: "00:01:37,112",
    end_time: "00:01:46,234",
    text:
      " moveForward 아래에 또, 움직이라는 명령어인   moveForward를 똑같이 입력해주면 두 칸을 갈 거예요."
  },
  {
    start_time: "00:01:46,284",
    end_time: "00:01:49,284",
    text: "한번 입력해보고 실행을 눌러볼까요? "
  },
  {
    start_time: "00:01:51,432",
    end_time: "00:01:55,700",
    text: "자 이렇게 선생님이랑 moveForward 명령어를 써봤는데"
  },
  {
    start_time: "00:01:55,856",
    end_time: "00:01:59,913",
    text: "여기 스크린을 보면 오른쪽으로 세 칸을 가죠."
  },
  {
    start_time: "00:02:00,067",
    end_time: "00:02:03,067",
    text: "한 칸을 더 가려면 어떻게 해야 할까요? "
  },
  {
    start_time: "00:02:03,333",
    end_time: "00:02:06,333",
    text: "맞아요. 아랫줄에 한 번 더 적으면 되겠죠?"
  },
  {
    start_time: "00:02:07,754",
    end_time: "00:02:09,900",
    text: "한번 같이 적어볼게요. "
  },
  {
    start_time: "00:02:11,193",
    end_time: "00:02:16,764",
    text: "그러고 나서 실행을 누르면 오른쪽 끝까지 세 칸을 잘 갈 거예요. "
  },
  {
    start_time: "00:02:16,853",
    end_time: "00:02:24,260",
    text:
      "이번에는 오카를 오른쪽으로 돌려서 두 칸 이동한 다음 상자까지 가 볼 거예요."
  },
  {
    start_time: "00:02:24,318",
    end_time: "00:02:28,670",
    text: "turn이라는 명령어를 이용할 건데 이것도 움직임 탭에 있어요. "
  },
  {
    start_time: "00:02:28,730",
    end_time: "00:02:34,791",
    text: "이건 스프라이트를 입력된 각도만큼 시계 방향으로 돌리는 명령어에요."
  },
  {
    start_time: "00:02:34,821",
    end_time: "00:02:42,081",
    text:
      "여기다가  turn을 입력하고 엔터를 치면 90이라는 숫자가 미리 적혀있을 거예요."
  },
  {
    start_time: "00:02:42,115",
    end_time: "00:02:49,003",
    text:
      "우리는 마침 오카가 오른쪽으로, 그러니까 시계 방향으로 90도만 돌면 되니까 "
  },
  {
    start_time: "00:02:49,098",
    end_time: "00:02:52,815",
    text: "안의 내용을 수정하지 않고 그대로 사용할 거예요."
  },
  {
    start_time: "00:02:53,027",
    end_time: "00:02:58,043",
    text:
      "그러고 나서 앞으로 두 칸 이동하는건 친구들이 스스로 입력을 해볼까요? "
  },
  {
    start_time: "00:02:58,100",
    end_time: "00:03:00,760",
    text: "앞으로 가는 것은 위에서 같이 해봤죠? "
  },
  {
    start_time: "00:03:01,170",
    end_time: "00:03:06,619",
    text: "두 칸을 가야 하니까 몇 번 입력해야 할지는 한번 스스로 해보세요."
  },
  {
    start_time: "00:03:08,273",
    end_time: "00:03:09,957",
    text: "자 잘 입력했나요? "
  },
  {
    start_time: "00:03:10,526",
    end_time: "00:03:16,141",
    text:
      "선생님이 적은 것이랑 어떤 점이 다른지 비교해보고 실행을 눌러 보세요. "
  },
  {
    start_time: "00:03:16,284",
    end_time: "00:03:19,284",
    text: "오카가 보물 상자까지 잘 이동했나요?  "
  },
  {
    start_time: "00:03:19,925",
    end_time: "00:03:24,050",
    text: "이렇게 컴퓨터는 하나하나씩 순서대로 명령을 실행해요. "
  },
  {
    start_time: "00:03:24,064",
    end_time: "00:03:31,339",
    text:
      "친구들이 원하는 명령을 하나하나 입력 잘 해주면 원하는 대로 스프라이트를 움직여볼 수 있을 거예요."
  },
  {
    start_time: "00:03:31,989",
    end_time: "00:03:32,644",
    text: "그럼 다음 수업에서 봐요."
  }
];

const VideoCaption = props => {
  let { caption = sample, captionTime } = props;

  const getTimeValue = timeStr => {
    const data = timeStr.split(":");
    const h = parseFloat(data[0]) * 3600;
    const m = parseFloat(data[1]) * 60;
    const s = data[2].split(",")[0];
    const s_point = (data[2].split(",")[1] / 1000).toFixed(3); // 0.xxx
    const timeValue =
      parseInt(h) + parseInt(m) + parseInt(s) + parseFloat(s_point);
    return timeValue;
  };

  const cur = captionTime.toFixed(3);
  let idx = -1;

  for (var i = 0; i < caption.length; ++i) {
    const s = caption[i].start_time;
    const e = caption[i].end_time;
    const start = getTimeValue(s);
    const end = getTimeValue(e);
    if (cur >= start && cur <= end) {
      idx = i;
      break;
    }
  }

  let text = idx === -1 ? "" : caption[idx].text;
  return <div style={{ background: "black", color: "white" }}>{text}</div>;
};

export default VideoCaption;
