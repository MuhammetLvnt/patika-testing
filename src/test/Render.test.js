import { render } from "@testing-library/react";
import EmojiResult from "../EmojiResult";

describe("Emoji list render", () => {
  test("Emoji List", () => {
    // Test için emoji data'sı oluşturuyoruz.
    const emojiData = [
      { title: "100", symbol: "💯" },
      { title: "Grinning", symbol: "😀" },
      { title: "Heart Eyes", symbol: "😍" },
    ];
    // EmojiResult "emojiData" dizisi ile render edilir.
    // render edilen EmojiResult'i test etmek için getByTestId fonksiyonunu kullanıyoruz.
    const { getByTestId } = render(<EmojiResult emojiData={emojiData} />);

    //Render edilen component içindeki emoji-list id'li elementi seçiyoruz.
    const emojiList = getByTestId("emoji-list");
    // "emojiList" elementinin children özelliğinin uzunluğunu kontrol ediyoruz.
    // bu sayede EmojiResult componentinin emojiData dizisindeki emoji verilerinin render edilip edilmediğine bakıyoruz.
    expect(emojiList.children.length).toBe(3);
  });
});
