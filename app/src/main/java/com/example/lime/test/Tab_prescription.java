package com.example.lime.test;

import android.app.Activity;
import android.app.ActivityGroup;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.Toast;
import android.view.View.OnClickListener;

import java.util.ArrayList;

/**
 * Created by lime on 2016-05-23.
 */
public class Tab_prescription extends ActivityGroup {


    public static Tab_prescription prescriptionHGroup;
    private ArrayList<View> history;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        history = new ArrayList<View>();
        prescriptionHGroup = this;

        Intent intent = new Intent(Tab_prescription.this, presc_search_0.class);
        View view = getLocalActivityManager().startActivity("presc_search_0",
                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();
        replaceView(view);



    }




    //새로운 Level의 Activity를 추가
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
        prescriptionHGroup.back();
        return ;
    }
}
