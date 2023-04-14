import { render, screen } from "@testing-library/react";
import EmojiResult from "../EmojiResult";
import filterEmoji from "../filterEmoji";

describe("EmojiResults ", () => {
  it("renders filtered emoji list", () => {
    const searchText = "pizza";
    const maxResults = 1;
    const filteredEmojiList = filterEmoji(searchText, maxResults);
    // EmojiResult componenti içindeki dizi ile render edilir.
    render(<EmojiResult emojiData={filteredEmojiList} />);
    // screen.getByTestId() methodu kullanılarak "emoji-list" adlı bir öğe elde edilir.
    const emojiList = screen.getByTestId("emoji-list");

    // expect fonksiyonu ile değerlerin eşit olup olmadığı kontrol edilir.
    expect(emojiList.children.length).toBe(maxResults);

    // for döngüsü ile dizi içerisindeki emojilerin isimleri ,"searckText" değeri içerip içermediğini kontrol eder.
    for (let i = 0; i < maxResults; i++) {
      const emojiTitle =
        emojiList.children[i].querySelector(".title").textContent;
      expect(emojiTitle.toLowerCase()).toContain(searchText.toLowerCase());
    }
  });
});
