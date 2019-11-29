import delayFunctionExecution from './delayFunctionExecution.js'

describe("delayFunctionExecution", () => {
  jest.useFakeTimers();

  it("waits 0.8 second before executing the function", () => {
    let functionMock = jest.fn()
    let delayedFunction = delayFunctionExecution({}, functionMock)

    expect(delayedFunction).toHaveBeenLastCalledWith(expect.any(Function), 800);
  });
});
