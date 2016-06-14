package com.example.lime.test;

import android.app.ActivityGroup;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import java.util.ArrayList;

/**
 * Created by lime on 2016-05-23.
 */
public class Tab_community extends ActivityGroup {
    public static Tab_community communityHGroup;
    private ArrayList<View> history;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        history = new ArrayList<View>();
        communityHGroup = this;

        Intent intent = new Intent(Tab_community.this, Commu_1.class);
        View view = getLocalActivityManager().startActivity("Commu_1",
                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();
        replaceView(view);
    }

    //새로운 Level의 Activity를 추가하는 경우,
    public void replaceView(View view) {
        history.add(view);
        setContentView(view);
    }

    // Back Key가 눌러졌을 경우에 대한 처리
    public void back() {
        if(history.size() > 0) {
            history.remove(history.size()-1);
            if(history.size() ==  0)
                finish();
            else
                setContentView(history.get(history.size()-1));
        }
        else
        {
            finish();
        }
    }

    // Back Key에 대한 Event Handler
    @Override
    public void onBackPressed() {
        communityHGroup.back();
        return ;
    }
}
