import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EmojiResultRow from "../EmojiResultRow";

describe("EmojiResultRow", () => {
  it("copies clicked emoji to clipboard", async () => {
    // test için örnek data oluşturuluyor.
    const emojiData = [
      {
        symbol: "😀",
        title: "Grinning Face",
      },
    ];

    const { getByText } = render(
      // EmojiResultRow render ediliyor.
      <EmojiResultRow title={emojiData[0].title} symbol={emojiData[0].symbol} />
    );

    // getByText ile "Click to copy emoji" metni içeren öğeyi seçiyoruz.
    const copyButton = getByText("Click to copy emoji");
    //fireEvent fonksiyonu ile tıklama olayı gerçekleşiyor.
    fireEvent.click(copyButton);

    // Tıklama olayından sonra emojinin kopyalanıp kopyalanmadığını kontrol ediyor.
    expect(
      copyButton.parentElement.getAttribute("data-clipboard-text")
    ).toEqual(emojiData[0].symbol);
  });
});
