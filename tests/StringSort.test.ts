import { sortStrings, sortStringsWithGivenOrder } from '../src/StringSort';

describe('testing StringSort', () => {
  test('with empty string', () => {
    expect(sortStrings('')).toBe('');
  });

  test('with example case', () => {
    expect(sortStrings('HiiveIsLive')).toBe('eehiiiilsvv');
  });

  test('with ordered case', () => {
    expect(sortStrings('abcdefghijklmnopqrstuvwxyz')).toBe('abcdefghijklmnopqrstuvwxyz');
  });

  test('with reversed order case', () => {
    expect(sortStrings('zyxwvutsrqponmlkjihgfedcba')).toBe('abcdefghijklmnopqrstuvwxyz');
  });

  test('with upper case will be changed to lower case', () => {
    expect(sortStrings('aBceDgZy')).toBe('abcdegyz');
  });

  test('with random string', () => {
    expect(sortStrings('bncvzxtyuioplkjhgfdswqream')).toBe('abcdefghijklmnopqrstuvwxyz');
  });
});

describe('testing sortStringsWithGivenOrder', () => {
    let naturalOrder = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let reverseOrder = 'zyxwvutsrqponmlkjihgfedcba'.split('');
    let missingAlphabet = 'abcdefg'.split('');
    let dupAlphabet = 'aabcdefghijklmnopqrstuvwxy'.split('');

    test('empty string', () => {
      expect(sortStringsWithGivenOrder('', naturalOrder)).toBe('');
    });

    test('with order list with missing alphabet', () => {
      expect(sortStringsWithGivenOrder('abcdefghijklmnopqrstuvwxyz', missingAlphabet)).toBe('-1');
    });

    test('with order list with duplicate alphabet', () => {
      expect(sortStringsWithGivenOrder('abcdefghijklmnopqrstuvwxyz', dupAlphabet)).toBe('-1');
    });
  
    test('with natural order using example', () => {
      expect(sortStringsWithGivenOrder('HiiveIsLive', naturalOrder)).toBe('eehiiiilsvv');
    });

    test('with natural order', () => {
        expect(sortStringsWithGivenOrder('edcba', naturalOrder)).toBe('abcde');
      });
  
    test('with reverse order case', () => {
      expect(sortStringsWithGivenOrder('abcdefghijklmnopqrstuvwxyz', reverseOrder)).toBe('zyxwvutsrqponmlkjihgfedcba');
    });
    
    test('with scrambled orders', () =>{
      expect(sortStringsWithGivenOrder("banana", "caxbyzdefgjihlmnopqrstuvwkl".split(''))).toBe("aaabnn");
      expect(sortStringsWithGivenOrder("abcdefghijklmnopqrstuvwxyz", "xvwzabyghijrstcdefklmnopqu".split(''))).toBe("xvwzabyghijrstcdefklmnopqu");
      expect(sortStringsWithGivenOrder("apple", "edafcpghiuklmjnobqrstvwxyz".split(''))).toBe("eappl");
    });
  });