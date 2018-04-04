cc.Class({
    extends: cc.Component,
    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        //显示信息
        cc.director.setDisplayStats(true);

        //设置Hello，World
        this.label.string = "Hello,World!";

        //设置加速计监听回调函数
        wx.onAccelerometerChange((res) => {
            console.log("X:" + res.x + " - Y:" + res.y + " - Z:" + res.z);
        });

        //罗盘监听
        wx.onCompassChange((res) => {
            console.log("Direction:" + res.direction);
        });
    },

    /**
     * 获取电池电量
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnGetBatteryInfo(event, cusData) {
        let battery = wx.getBatteryInfoSync();
        wx.showModal(
            {
                title: "电量信息",
                content: "电量：" + battery.level,
                success: (res) => {
                    console.log("对话框显示成功");
                    console.log("confirm:" + res.confirm);
                    console.log("cancel:" + res.cancel);
                },
                fail: () => {
                    console.log("对话框显示失败");
                },
                complete: () => {
                    console.log("对话框调用完成");
                }
            }
        );
    },

    /**
     * 获取剪切板数据
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnGetClipboardData(event, cusData) {
        wx.getClipboardData({
            success: (data) => {
                console.log("获取剪切板数据成功");
                wx.showModal(
                    {
                        title: "剪切板数据",
                        content: data.data,
                        success: (res) => {
                            console.log("对话框显示成功");
                            console.log("confirm:" + res.confirm);
                            console.log("cancel:" + res.cancel);
                        },
                        fail: () => {
                            console.log("对话框显示失败");
                        },
                        complete: () => {
                            console.log("对话框调用完成");
                        }
                    }
                );
            },
            fail: () => {
                console.log("获取剪切板数据失败");
            },
            complete: () => {
                console.log("获取剪切板数据完成");
            }
        });
    },

    /**
     * 获取系统信息     
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnGetSysInfoClick(event, cusData) {
        let sysInfo = wx.getSystemInfoSync();
        let sysContent = "手机品牌:" + sysInfo.brand;
        sysContent += "\r\n手机型号:" + sysInfo.model;
        sysContent += "\r\n设备像素比:" + sysInfo.pixelRatio;
        sysContent += "\r\n屏幕宽度:" + sysInfo.screenWidth;
        sysContent += "\r\n屏幕高度:" + sysInfo.screenHeight;
        sysContent += "\r\n可使用窗口宽度:" + sysInfo.windowWidth;
        sysContent += "\r\n可使用窗口高度:" + sysInfo.windowHeight;
        sysContent += "\r\n微信设置语言:" + sysInfo.language;
        sysContent += "\r\n微信版本号:" + sysInfo.version;
        sysContent += "\r\n操作系统版本:" + sysInfo.system;
        sysContent += "\r\n客户端平台:" + sysInfo.platform;
        sysContent += "\r\n用户字体大小设置:" + sysInfo.fontSizeSetting;
        sysContent += "\r\n客户端基础库版本:" + sysInfo.SDKVersion;
        sysContent += "\r\n性能等级:" + sysInfo.benchmarkLevel;
        sysContent += "\r\n电量:" + sysInfo.battery;
        sysContent += "\r\nwifi 信号强度:" + sysInfo.wifiSignal;

        wx.showModal(
            {
                title: "系统信息",
                content: sysContent,
                cancelText: "关闭，红",
                cancelColor: "#FF0000",
                confirmText: "确认，绿",
                confirmColor: "#00FF00",
                success: (res) => {
                    console.log("对话框显示成功");
                    console.log("confirm:" + res.confirm);
                    console.log("cancel:" + res.cancel);
                },
                fail: () => {
                    console.log("对话框显示失败");
                },
                complete: () => {
                    console.log("对话框调用完成");
                }

            }
        );
    },

    /**
     * 获取网络信息
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnGetNetworkInfo(event, cusData) {
        wx.getNetworkType({
            success: (res) => {
                console.log("获取网络信息成功");
                wx.showModal({
                    title: "网络信息",
                    content: "是否连接:" + res.isConnected + "\r\n网络类型:" + res.networkType
                });
            },
            fail: () => {
                console.log("获取网络信息失败");
            },
            complete: () => {
                console.log("获取网络信息完成");
            }
        });
    },

    /**
     * 加速计监听开关
     * @param {toggle组件} toggle 
     */
    toggleAccelerometer(toggle) {
        if (toggle.isChecked) {
            wx.startAccelerometer(
                {
                    success: () => {
                        console.log("监听加速度数据启动成功");
                    },
                    fail: () => {
                        console.log("监听加速度数据启动失败");
                    },
                    complete: () => {
                        console.log("监听加速计数据启动调用完成");
                    }
                }
            );
        } else {
            wx.stopAccelerometer(
                {
                    success: () => {
                        console.log("停止监听加速度数据成功");
                    },
                    fail: () => {
                        console.log("停止监听加速度数据失败");
                    },
                    complete: () => {
                        console.log("停止监听加速计数据调用完成");
                    }
                }
            );
        }
    },

    /**
     * 罗盘监听开关
     * @param {toggle组件} toggle 
     */
    toggleCompassChange(toggle) {
        if (toggle.isChecked) {
            wx.startCompass(
                {
                    success: () => {
                        console.log("监听罗盘数据启动成功");
                    },
                    fail: () => {
                        console.log("监听罗盘数据启动失败");
                    },
                    complete: () => {
                        console.log("监听罗盘数据启动调用完成");
                    }
                }
            );
        } else {
            wx.stopCompass(
                {
                    success: () => {
                        console.log("停止监听罗盘数据成功");
                    },
                    fail: () => {
                        console.log("停止监听罗盘数据失败");
                    },
                    complete: () => {
                        console.log("停止监听罗盘数据调用完成");
                    }
                }
            );
        }
    },

    /**
     * 长震动400 ms
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnVibrateLongClick(event, cusData) {
        wx.vibrateLong(
            {
                success: function () {
                    console.log("长震动调用成功");
                },
                fail: function () {
                    console.log("长震动调用失败");
                },
                complete: function () {
                    console.log("长震动调用完成");
                },
            }
        );
    },
    /**
     * 短震动15 ms
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnVibrateShortClick(event, cusData) {
        wx.vibrateShort(
            {
                success: function () {
                    console.log("短动调用成功");
                },
                fail: function () {
                    console.log("短动调用失败");
                },
                complete: function () {
                    console.log("短动调用完成");
                },
            }
        );
    },

    /**
     * 
     * @param {slide组件} slide 
     * @param {自定义数据} cusData 
     */
    screenBrightnessSlideChange(slide, cusData) {
        wx.setScreenBrightness({
            value: slide.progress
        });
    },

    /**
     * 检测Session
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnCheckSession(event, cusData) {
        wx.checkSession({
            success: () => {
                wx.showModal({
                    title: "登录信息有效"
                });
            },
            fail: () => {
                wx.showModal({
                    title: "登录已失效"
                });
            }
        });
    },

    /**
     * 登录
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnWxLogin(event, cusData) {
        wx.login({
            success: (res) => {
                wx.showModal({
                    title: "获取CODE成功",
                    content: "code:" + res.code
                });
            },
            fail: () => {
                wx.showModal({
                    title: "用户取消授权",
                });
            }
        });
    },

    /**
     * 请求用户授权信息
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnAuthorizeUserInfo(event, cusData) {
        wx.authorize({
            scope: "scope.userInfo",
            success: () => {
                console.log("用户信息授权成功");
                wx.showModal({
                    title: "用户信息授权成功",
                    content: "用户信息授权成功"
                });
            },
            fail: () => {
                console.log("授权失败");
            }
        });
    },

    /**
     * 直接获取用户数据
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnGetUserInfo(event, cusData) {
        wx.getUserInfo({
            success: (res) => {
                console.log("获取用户数据成功");
                let userInfo = "country province city 所用的语言:" + res.userInfo.language;
                userInfo += "\r\n昵称:" + res.userInfo.nickName;
                userInfo += "\r\n头像图片 url:" + res.userInfo.avatarUrl;
                userInfo += "\r\n性别(0:未知,1:男,2:女):" + res.userInfo.gender;
                wx.showModal({
                    title: "用户信息",
                    content: userInfo
                });
            },
            fail: () => {
                console.log("获取用户数据失败");
            }
        });
    },

    /**
     * 打开设置界面
     * @param {事件对象} event 
     * @param {自定时数据} cusData 
     */
    btnOpenSetting(event, cusData) {
        wx.openSetting({
            success: (res) => {
                let setting = "scope.userInfo:" + res.authSetting["scope.userInfo"];
                setting += "\r\nscope.userLocation:" + res.authSetting["scope.userLocation"];
                console.log("打开设置页面成功");
                wx.showModal({
                    title: "授权设置",
                    content: setting
                });
            },
            fail: () => {
                console.log("打开设置页面失败");
            }
        });
    }
});
