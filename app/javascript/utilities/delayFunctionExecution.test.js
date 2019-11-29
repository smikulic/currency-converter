import delayFunctionExecution from './delayFunctionExecution.js'

describe("delayFunctionExecution", () => {
  jest.useFakeTimers();

  it("delays execution of the function", () => {
    let functionMock = jest.fn()
    delayFunctionExecution({}, functionMock)

    // At this point in time, the callback should not have been called yet
    expect(functionMock).not.toBeCalled()

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(functionMock).toBeCalled()
    expect(functionMock).toHaveBeenCalledTimes(1)
  });
});
